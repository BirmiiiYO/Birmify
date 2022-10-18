import React, { FC } from 'react';

import Head from 'next/head';
import Router from 'next/router';

import { Button, Layout, PageHeader } from 'antd';

import RouterButton from '../../components/RouterButton';
import { useAppSelector } from '../../hooks/Redux';
import { ErrorMessage } from '../../components/ErrorMessage';

const Tracks: FC = () => {
  const { Error } = useAppSelector((state) => state.TrackReducer);

  if (Error) {
    return <ErrorMessage>{Error}</ErrorMessage>;
  }

  return (
    <>
      <Head>
        <title>Page with tracks</title>
      </Head>
      <Layout>
        <PageHeader
          title="Tracks"
          extra={[
            <RouterButton href="tracks/add" type="primary">
              Add track
            </RouterButton>,
            <Button onClick={() => Router.back()} type="primary">
              To previous
            </Button>,
          ]}
        />
        {/* тута отрисовка массива с треками */}
      </Layout>
    </>
  );
};

export default Tracks;
