import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { get } from 'lodash';

import { APP_NAME } from '../../config/app-config';
import MainContainer from '../../components/MainContainer';
import { BottomContent, Container } from './styled';
import { PostData } from '../../domain/posts/post';

import { calculatePostDateTime } from '../../utils/calculatePostDateTime';
import Loading from '../../components/Loading';

export type HomePageProps = {
  posts: PostData[];
};

export default function HomePage({ posts }: HomePageProps) {
  const [items, setItems] = useState([]); // current list of items
  const [fullListItems, setFullListItems] = useState([]); // full list of items
  const [numberOfPages, setNumberOfPages] = useState(1); //number of pages
  const maxItemsAllowed = 5; // maximum items allowed
  const [currentPage, setCurrentPage] = useState(1); // current page
  const [isLoading, setIsLoading] = useState(false);

  const isHome = posts.filter((e) => e.isHome);
  const isEmphasis = posts.filter((e) => e.isEmphasis);

  useEffect(() => {
    function pagination(data) {
      setIsLoading(true);

      if (data.length > maxItemsAllowed) {
        const a = data.length / maxItemsAllowed;
        setNumberOfPages(Math.ceil(a));
        setFullListItems(data);
        setItems(data.slice(0, maxItemsAllowed));
      } else {
        setNumberOfPages(1);
        setFullListItems([]);
        setItems(data);
      }

      setIsLoading(false);
    }

    pagination(isHome);
  }, []);

  function handleLoadMore() {
    const nextPage = currentPage + 1;
    const end = nextPage * maxItemsAllowed;
    setItems(fullListItems.slice(0, end));
    setCurrentPage(currentPage + 1);
  }

  return (
    <MainContainer>
      <Head>
        <title>{APP_NAME} - Notícias, esportes, entretenimento e mais</title>
        <meta
          name="description"
          content="Acompanhe as últimas notícias e vídeos, além de tudo sobre esportes e entretenimento. Conheça o conteúdo e os serviços do b12."
        />
        <meta
          name="keywords"
          content="noticias, videos, esportes, entretenimento, b12, diversao, fotos"
        />

        <link
          href="https://fonts.googleapis.com/css?family=Raleway"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Container>
        <Loading isLoading={isLoading} />
        {get(items[0], 'title', false) && (
          <Container>
            <div className="mainContent">
              <div
                className={`leftContent ${items[0].cover ? '' : 'noImage'}`}
                style={{
                  backgroundImage: items[0].cover
                    ? `url(${items[0].cover.url})`
                    : '',
                }}
              >
                <span className="category">{items[0].category.name}</span>
                <Link href="/news/[slug]" as={`/news/${items[0].slug}`}>
                  <a>
                    <h2 title={items[0].title}>
                      {items[0].title.length > 80
                        ? `${items[0].title.slice(0, 80)} ...`
                        : items[0].title}
                    </h2>
                    <h3 title={items[0].subtitle}>
                      {items[0].subtitle.length > 100
                        ? `${items[0].subtitle.slice(0, 100)} ...`
                        : items[0].subtitle}
                    </h3>
                  </a>
                </Link>
                <br />
                <br />
                <span>{calculatePostDateTime(items[0].date)}</span>
              </div>

              <div className="rightContent">
                <div
                  className={items[1].cover ? '' : 'noImage'}
                  style={{
                    backgroundImage: items[1].cover
                      ? `url(${items[1].cover.url})`
                      : '',
                  }}
                >
                  <span className="category">{items[1].category.name}</span>
                  <Link href="/news/[slug]" as={`/news/${items[1].slug}`}>
                    <a>
                      <h2 title={items[1].title}>
                        {items[1].title.length > 80
                          ? `${items[1].title.slice(0, 80)} ...`
                          : items[1].title}
                      </h2>
                      <h3 title={items[1].subtitle}>
                        {items[1].subtitle.length > 100
                          ? `${items[1].subtitle.slice(0, 100)} ...`
                          : items[1].subtitle}
                      </h3>
                    </a>
                  </Link>
                  <br />
                  <br />
                  <span>{calculatePostDateTime(items[1].date)}</span>
                </div>

                <div
                  className={items[2].cover ? '' : 'noImage'}
                  style={{
                    backgroundImage: items[2].cover
                      ? `url(${items[2].cover.url})`
                      : '',
                  }}
                >
                  <span className="category">{items[2].category.name}</span>
                  <Link href="/news/[slug]" as={`/news/${items[2].slug}`}>
                    <a>
                      <h2 title={items[2].title}>
                        {items[2].title.length > 80
                          ? `${items[2].title.slice(0, 80)} ...`
                          : items[2].title}
                      </h2>
                      <h3 title={items[2].subtitle}>
                        {items[2].subtitle.length > 100
                          ? `${items[2].subtitle.slice(0, 100)} ...`
                          : items[2].subtitle}
                      </h3>
                    </a>
                  </Link>
                  <br />
                  <br />
                  <span>{calculatePostDateTime(items[2].date)}</span>
                </div>
              </div>
            </div>
            <BottomContent>
              <div className="regularNews">
                {items.map(
                  (post, index) =>
                    index > 2 && (
                      <div
                        key={post.slug}
                        className={`newsCard ${
                          post.cover ? '' : 'noImageRegularNews'
                        }`}
                      >
                        <div className="imgNews">
                          <Link href="/news/[slug]" as={`/news/${post.slug}`}>
                            <a>
                              <img
                                src={
                                  post.cover ? post.cover.formats.small.url : ''
                                }
                              />
                            </a>
                          </Link>
                        </div>
                        <div>
                          <span>{post.category.name}</span>
                          <Link href="/news/[slug]" as={`/news/${post.slug}`}>
                            <a>
                              <h2 title={post.title}>
                                {post.title.length > 80
                                  ? `${post.title.slice(0, 80)} ...`
                                  : post.title}
                              </h2>
                            </a>
                          </Link>
                          <p>
                            {post.subtitle.length > 60
                              ? `${post.subtitle.slice(0, 60)} ...`
                              : post.subtitle}
                          </p>
                          <span className="feedPostDateTime">
                            {calculatePostDateTime(post.date)}
                          </span>
                        </div>
                      </div>
                    ),
                )}
                {currentPage < numberOfPages && (
                  <button
                    onClick={() => handleLoadMore()}
                    title="Ver mais notícias"
                  >
                    VEJA MAIS
                  </button>
                )}
              </div>
              <div className="emphasis">
                <div>
                  <h3>Destaque</h3>
                  <ul>
                    {get(isEmphasis[0], 'title', false) &&
                      isEmphasis.map(
                        (post, index) =>
                          index < 10 && (
                            <Link
                              href="/news/[slug]"
                              as={`/news/${post.slug}`}
                              key={post.slug}
                            >
                              <a>
                                <li
                                  className={index === 9 ? 'noBorder' : ''}
                                  title={post.title}
                                >
                                  <span>{index + 1}</span>{' '}
                                  {post.title.length > 60
                                    ? `${post.title.slice(0, 60)} ...`
                                    : post.title}
                                </li>
                              </a>
                            </Link>
                          ),
                      )}
                  </ul>
                </div>
              </div>
            </BottomContent>
          </Container>
        )}
      </Container>
    </MainContainer>
  );
}
