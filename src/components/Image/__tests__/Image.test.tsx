import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import * as React from 'react';
import { Image } from '../Image';

describe('Image', () => {
  it('should render', async () => {
    render(
      <Image src={'https://example.com/example.jpg'} alt={'render test'} />,
    );

    const img = screen.getByRole('img', { name: 'render test' });

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://example.com/example.jpg');
  });

  it('should accept numeric width/height and convert them to px in styles', () => {
    render(
      <Image
        src={'https://example.com/num.jpg'}
        alt="numeric test"
        width={200}
        height={150}
      />,
    );

    const img = screen.getByRole('img', { name: 'numeric test' });

    expect(img).toHaveStyle({ width: '200px', height: '150px' });
  });

  it('should keep string sizes as-is in styles', () => {
    render(
      <Image
        src={'https://example.com/percent.jpg'}
        alt="as-is test"
        width="50%"
        height="25%"
      />,
    );

    const img = screen.getByRole('img', { name: 'as-is test' });

    expect(img).toHaveStyle({ width: '50%', height: '25%' });
  });

  it('should merge custom className', () => {
    render(
      <Image
        src={'https://example.com/test.jpg'}
        alt="merge classnames test"
        className="test-class"
      />,
    );

    const img = screen.getByRole('img', { name: 'merge classnames test' });

    expect(img).toHaveClass('test-class');
  });

  it('should forward ref to the underlying img element', () => {
    const ref = React.createRef<HTMLImageElement>();

    render(
      <Image src={'https://example.com/ref.jpg'} alt="ref test" ref={ref} />,
    );

    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('IMG');
  });

  it('should call onError and log an error', () => {
    const onError = vi.fn();
    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    const src = 'https://example.com/example.jpg';
    const alt = 'error test';

    render(<Image src={src} alt={alt} onError={onError} />);

    const img = screen.getByRole('img', { name: alt });

    fireEvent.error(img);

    expect(onError).toHaveBeenCalled();
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      expect.stringContaining('[Image] failed to load'),
      expect.objectContaining({ src, alt }),
    );

    consoleErrorSpy.mockRestore();
  });
});
