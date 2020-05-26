import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ComicInput } from '../API';
import ImageViewer from '../components/ImageViewer';

const currentItem: ComicInput = {
  num: 2310,
  safe_title: 'Great Attractor',
  alt:
    'Living in the southern hemisphere was nice because I could jump extra high...',
  img: 'https://imgs.xkcd.com/comics/great_attractor.png',
  title: 'Great Attractor',
  day: null,
  month: null,
  year: null,
  link: null,
};

describe('<ImageViewer />', () => {
  test('should display a Current comic', async () => {
    const { findByTestId } = render(
      <ImageViewer
        imagePath="https://drsumnjbi1jhu.cloudfront.net/fortune_cookies.png"
        item={currentItem}
        isLoading={false}
      />
    );

    const title = await findByTestId('imageviewer__heading');
    const image = await findByTestId('imageviewer__image');
    expect(title.textContent).toBe('Great Attractor');
    expect(image['src']).toBe(
      'https://drsumnjbi1jhu.cloudfront.net/fortune_cookies.png'
    );
  });
});
