import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useTheme } from '../../hooks';

import { Container } from './styles';

function Loading() {
  const { theme } = useTheme();
  return (
    <Container>
      <Skeleton height={70} className="header" />

      <div className="items">
        <SkeletonTheme>
          <Skeleton className="item" count={5} highlightColor="#f57" />
        </SkeletonTheme>
      </div>
    </Container>
  );
}

export default Loading;
