import { DiscussionEmbed } from 'disqus-react';
import { APP_URL } from '../../config/appConfig';
import { Container } from './styles';

export type CommentsProps = {
  slug: string;
  title: string;
};

export const Comments = ({ slug, title }: CommentsProps) => {
  return (
    <Container>
      <DiscussionEmbed
        shortname="meublog-8"
        config={{
          url: `${APP_URL}/news/${slug}`,
          // url: `http://vcap.me:3000/news/${slug}`,
          identifier: slug,
          title: title,
          language: 'pt_BR',
        }}
      />
    </Container>
  );
};
