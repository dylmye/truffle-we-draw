import { gql } from "https://tfl.dev/@truffle/api@~0.1.0/client.ts";

export const PACKAGE_CONNECTION_QUERY = gql`
  query PollConnectionQuery ($input: PollConnectionInput, $first: Int, $after: String, $last: Int, $before: String) {
    pollConnection(input: $input, first: $first, after: $after, last: $last, before: $before) {
        pageInfo {
            endCursor
            hasNextPage
            startCursor
            hasPreviousPage
        }
        nodes {
            id
            orgId
            question
            options {
                text
                index
                count
                unique
            }
            myVote {
              optionIndex
              count
            }
            endTime
            time
        }
    }
}
`;

export const POLL_QUERY = gql`
  query PollQuery ($input: PollInput) {
    poll(input: $input) {
            id
            orgId
            question
            options {
                text
                index
                count
                unique
            }
            myVote {
              optionIndex
              count
            }
            endTime
            time
    }
}
`;

export const POLL_VOTE_MUTATION = gql`
  mutation PollVote($input: PollVoteByIdInput) {
    pollVoteById(
      input: $input
    ) {
      hasVoted
    }
  }
`;
