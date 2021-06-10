import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Photo from "../components/feed/Photo";
import PageTitle from "../components/PageTitle";
import { COMMENT_FRAGMENT } from "../fragments";
import InfiniteScroll from "react-infinite-scroll-component";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const override = css`
  margin-left: 300px;
`;

const FEED_QUERY = gql`
  query seeFeed($offset: Int!) {
    seeFeed(offset: $offset) {
      id
      user {
        username
        avatar
      }
      file
      caption
      likes
      commentNumber
      isLiked
      createdAt
      isMine
      comments {
        ...CommentFragment
      }
    }
  }
  ${COMMENT_FRAGMENT}
`;

function Home() {
  const { data, loading, refetch, fetchMore } = useQuery(FEED_QUERY, {
    variables: {
      offset: 0,
    },
  });

  const onLoadMore = () => {
    console.log("test");
    fetchMore({
      variables: {
        offset: data.seeFeed.length,
      },
      // updateQuery: (prev, { fetchMoreResult }) => {

      //   if (!fetchMoreResult) return prev;
      //   return Object.assign({}, prev, {
      //     seeFeeds: [...prev.seeFeed, ...fetchMoreResult.seeFeed],
      //   });
      // },
    });
  };

  return (
    <>
      <PageTitle title="Home" />
      {!loading && (
        <InfiniteScroll
          dataLength={data.seeFeed.length} //This is important field to render the next data
          next={onLoadMore}
          hasMore={true}
          showsVerticalScrollIndicator={false}
          loader={
            loading ? (
              <ClipLoader css={override} size={35} color={"#999999"} />
            ) : null
          }
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {data?.seeFeed?.map((photo) => (
            <Photo key={photo.id} {...photo} />
          ))}
        </InfiniteScroll>
      )}
    </>
  );
}

export default Home;

//    <div>
//   <PageTitle title="Home" />
//   {data?.seeFeed?.map((photo) => (
//     <Photo key={photo.id} {...photo} />
//   ))}
// </div>
