import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import testPageResource from '../resources/test-page'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Corporate Communications Facilitator</title>
          <meta
            property="og:title"
            content="test-page - Corporate Communications Facilitator"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_s36k5i) => (
            <>
              <h1>{context_s36k5i?.Name}</h1>
            </>
          )}
          initialData={props.contextS36k5iProp}
          persistDataDuringLoading={true}
          key={props?.contextS36k5iProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const contextS36k5iProp = await testPageResource({
      ...context?.params,
    })
    return {
      props: {
        contextS36k5iProp: contextS36k5iProp?.data?.[0],
      },
    }
  } catch (errro) {
    return {
      notFound: true,
    }
  }
}
