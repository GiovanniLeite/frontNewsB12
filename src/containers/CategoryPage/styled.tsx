import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    font-family: 'Open Sans', sans-serif;
    background-color: #eee;
    max-width: 120rem;
    margin: 0 auto;
    padding: ${theme.spacings.small};
    padding-top: 30px;

    @media only screen and (max-width: 1205px) {
      padding-top: 20px;
    }

    @media only screen and (max-width: 600px) {
      padding-top: 90px;
    }

    div.mainContent > h2 {
      font-weight: bold;
      margin-bottom: ${theme.spacings.small};
      padding-left: ${theme.spacings.verySmall};

      @media only screen and (max-width: 600px) {
        padding: 0;
      }
    }

    div.mainContent {
      div.mainNews {
        display: grid;
        grid-template-columns: 50% 50%;
        color: #fff;
        padding: ${theme.spacings.verySmall};

        @media only screen and (max-width: 700px) {
          grid-template-columns: 100%;
        }

        @media only screen and (max-width: 600px) {
          padding: 0;
        }

        a {
          text-decoration: none;
          color: #fff;
        }

        h2:hover,
        h3:hover {
          color: rgba(255, 255, 255, 0.7);
        }
        h2 {
          margin-top: 170px;

          @media only screen and (max-width: 960px) {
            margin-top: 100px;
            font-size: 110%;
          }

          @media only screen and (max-width: 700px) {
            margin-top: 290px;
            font-size: 130%;
          }

          @media only screen and (max-width: 500px) {
            margin-top: 190px;
          }

          @media only screen and (max-width: 400px) {
            margin-top: 150px;
          }

          @media only screen and (max-width: 350px) {
            font-size: 90%;
          }
        }

        h3 {
          font-weight: 400;

          @media only screen and (max-width: 1000px) {
            margin-bottom: ${theme.spacings.small};
          }

          @media only screen and (max-width: 960px) {
            font-size: 90%;
          }
        }

        div.leftContent,
        div.rightContent {
          padding: ${theme.spacings.small};
          background-repeat: no-repeat;
          background-attachment: scroll;
          background-size: cover;
          background-position: top center;
          border-radius: 3px;
        }

        div.leftContent {
          @media only screen and (max-width: 700px) {
            min-height: 500px;
          }

          @media only screen and (max-width: 500px) {
            min-height: 0;
          }
        }

        div.rightContent {
          margin-left: ${theme.spacings.verySmall};

          @media only screen and (max-width: 700px) {
            display: none;
          }
        }

        .noImage {
          background-color: #fff;
          color: ${theme.colors.darkGray};
          border: 1px solid rgba(199, 199, 199);

          span.textAbove {
            color: ${theme.colors.darkBlue};
          }

          h2 {
            color: ${theme.colors.darkBlue};
          }

          h2:hover,
          h3:hover {
            color: rgba(0, 53, 128, 0.7);
          }

          a {
            color: ${theme.colors.darkGray};
          }
        }
      }
    }
  `}
`;

export const RegularNews = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    margin-bottom: ${theme.spacings.small};

    @media only screen and (max-width: 1000px) {
      margin-top: ${theme.spacings.verySmall};
    }

    div.newsCardContainer {
      display: grid;
      grid-template-columns: 33% 34% 33%;

      @media only screen and (max-width: 700px) {
        grid-template-columns: 50% 50%;
      }

      @media only screen and (max-width: 600px) {
        grid-template-columns: 100%;
      }
    }

    div.newsCard {
      margin: ${theme.spacings.verySmall};
      padding: ${theme.spacings.small};
      padding-top: 130px;
      border-radius: 3px;

      background-repeat: no-repeat;
      background-attachment: scroll;
      background-size: cover;
      background-position: top center;

      @media only screen and (max-width: 800px) {
        padding-top: 100px;
      }

      @media only screen and (max-width: 700px) {
        padding-top: 140px;
      }

      @media only screen and (max-width: 600px) {
        min-height: 300px;
        margin: 0;
        margin-bottom: ${theme.spacings.verySmall};
      }

      img {
        display: none;
      }

      span {
        font-size: 80%;
        color: #fff;
      }

      span.textAbove {
        padding: 5px;
        background-color: ${theme.colors.darkBlue};

        border-radius: 2px;
        font-size: 60%;
        text-transform: uppercase;

        @media only screen and (max-width: 870px) {
          padding: 2px;
        }
      }

      a {
        text-decoration: none;
        color: #fff;
        font-size: 110%;
        font-weight: bold;
        display: block;
        margin: ${theme.spacings.small} 0;

        @media only screen and (max-width: 870px) {
          font-size: 80%;
        }

        @media only screen and (max-width: 600px) {
          font-size: 110%;
        }
      }

      a:hover {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    div.newsCard.noImage {
      background-color: #fff;
      border: 1px solid rgb(199, 199, 199);

      a {
        color: ${theme.colors.darkBlue};
      }

      a:hover {
        color: rgba(0, 53, 128, 0.7);
      }

      a + span {
        color: ${theme.colors.darkGray};
      }
    }

    button {
      background-color: ${theme.colors.darkBlue};
      padding: 15px;
      color: #fff;
      border: none;
      width: 100%;
      font-weight: bold;
      border-radius: 3px;
      margin-top: ${theme.spacings.small};
    }

    button:hover {
      background-color: rgba(0, 53, 128, 0.9);
      cursor: pointer;
    }
  `}
`;

export const Top10 = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;
    background-color: ${theme.colors.lightGray};
    border-radius: 3px;

    h2 {
      margin-left: ${theme.spacings.verySmall};
      margin-bottom: ${theme.spacings.small};
    }

    div.emphasis {
      display: grid;
      grid-template-columns: 25% 25% 25% 25%;

      @media only screen and (max-width: 1050px) {
        grid-template-columns: 33% 33% 33%;
      }

      @media only screen and (max-width: 800px) {
        grid-template-columns: 50% 50%;
      }

      @media only screen and (max-width: 560px) {
        grid-template-columns: 100%;
        padding-bottom: ${theme.spacings.verySmall};
      }
    }

    div.Card {
      display: grid;
      grid-template-columns: 35% 65%;
      margin: ${theme.spacings.verySmall};
      padding: ${theme.spacings.verySmall};
      border-radius: 3px;
      border: 1px solid rgba(199, 199, 199);
      background-color: #fff;
      color: ${theme.colors.darkGray};
      min-height: 110px;

      @media only screen and (max-width: 560px) {
        grid-template-columns: 25% 75%;
        margin-bottom: 0;
      }

      @media only screen and (max-width: 400px) {
        grid-template-columns: 35% 65%;
      }

      div.divImg {
        img {
          height: 100%;
          width: 100%;
        }
      }

      div.divImg + div {
        padding-left: 5px;
      }

      span.textAbove {
        font-size: 70%;
        color: ${theme.colors.darkBlue};
      }

      a {
        text-decoration: none;
        display: block;
        font-size: 80%;
        color: ${theme.colors.darkGray};
      }

      a:hover {
        color: rgb(114, 114, 114);
      }
    }

    div.Card.noImage {
      grid-template-columns: 100%;

      a {
        margin-top: 10px;
      }
    }
  `}
`;
