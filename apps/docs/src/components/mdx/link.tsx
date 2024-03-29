import * as React from 'react'
import NextLink from 'next/link'

import { ExternalLink } from 'components/external-link'
import tw from 'twin.macro'

function Link({ href, className, children, ...props }: JSX.IntrinsicElements['a']) {
  const classes = tw`inline text-link dark:text-link-dark border-b border-link border-opacity-0 hover:border-opacity-100 duration-100 ease-in transition leading-normal`
  const modifiedChildren = React.Children.toArray(children).map((child: any) => {
    if (child.type?.mdxName && child.type?.mdxName === 'inlineCode') {
      return React.cloneElement(child, {
        isLink: true,
      })
    }
    return child
  })

  if (!href) {
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    return <a href={href} className={className} {...props} />
  }
  return (
    <>
      {href.startsWith('https://') ? (
        <ExternalLink href={href} css={classes} className={className} {...props}>
          {modifiedChildren}
        </ExternalLink>
      ) : href.startsWith('#') ? (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        <a css={classes} className={className} href={href} {...props}>
          {modifiedChildren}
        </a>
      ) : (
        <NextLink href={href.replace('.html', '')}>
          {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
          <a css={classes} className={className} {...props}>
            {modifiedChildren}
          </a>
        </NextLink>
      )}
    </>
  )
}

export default Link
