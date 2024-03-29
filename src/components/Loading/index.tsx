import React from 'react';

import { Container } from './styles';

export type LoadingProps = {
  isLoading: boolean;
};

export default function Loading({ isLoading }: LoadingProps) {
  if (isLoading)
    return (
      <Container>
        <div />
        <span className="loading" />
      </Container>
    );

  return <></>;
}
