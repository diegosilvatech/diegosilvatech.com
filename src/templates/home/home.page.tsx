import { ShortcutHome } from 'components';
import { Typography } from 'components';
import { PageStructure, PageHead, PageHeadProps, PageContent } from 'templates';

export type HomePageProps = PageHeadProps;

const HomePage = ({ description, image, tabTitle }: HomePageProps) => {
  return (
    <PageStructure alignment="center">
      <PageHead description={description} image={image} tabTitle={tabTitle} />
      <PageContent>
        <div>
          <h1>Diego Silva</h1>
          <Typography.Paragraph>
            <strong>
              Senior Frontend Developer at{' '}
              <a href="https://neon.com.br/" target="blank">
                Neon Bank
              </a>
              .
              <br />
            </strong>
            {description}
          </Typography.Paragraph>
          <ShortcutHome />
        </div>
      </PageContent>
    </PageStructure>
  );
};

export { HomePage };
