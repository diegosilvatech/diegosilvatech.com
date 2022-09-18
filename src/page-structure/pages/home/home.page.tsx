import { useTheme } from 'next-themes';

import { ShortcutHome } from 'components';
import { Text } from 'components';
import {
  PageContainer,
  PageHead,
  PageHeadProps,
  PageContent
} from 'page-structure';

export type HomePageProps = PageHeadProps;

const HomePage = ({ description, image, tabTitle }: HomePageProps) => {
  const { theme = 'default', setTheme } = useTheme();
  return (
    <PageContainer alignment="center">
      <PageHead description={description} image={image} tabTitle={tabTitle} />
      <PageContent colorPrimary="brand-primary-09">
        <div>
          <button onClick={() => setTheme('dark')}>dark</button>
          <button onClick={() => setTheme('light')}>light</button>
          <Text as={'h1'}>Diego Silva</Text>
          <Text>
            <strong>
              Senior Frontend Developer at{' '}
              <Text as="a" href="https://neon.com.br/" target="_blank">
                Neon Bank
              </Text>
              .
              <br />
            </strong>
            {description}
          </Text>
          <ShortcutHome />
        </div>
      </PageContent>
    </PageContainer>
  );
};

export { HomePage };
