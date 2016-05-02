import React from 'react'
import { config } from 'config'
import { rhythm } from 'utils/typography'
import { prefixLink } from 'gatsby-helpers'

class Bio extends React.Component {
  render () {
    return (
      <div>
        <p>
          Joe develops with a designer’s eye.
        </p>
        <p>
          Joe began his career early, designing and developing a multi-user anonymous blog that gained readership worldwide before finishing high school. After graduating from Virginia Commonwealth’s College of Humanities and Sciences, he worked as a designer in the Washington D.C. area for clients in government, non-profit and education industries.
        </p>
        <p>
          In 2008, Joe moved to Brooklyn and focused his career on front end development where he worked on clients such as G-Shock, Ciroc Vodka, MTV and David’s Bridal. That experience helped him to become a triple threat with expertise in UX, design and development.
        </p>
        <p>
          As part of Adoptive’s technology team, Joe focuses on bringing a better experience to the user wherever the web happens to be.
        </p>
      </div>
    )
  }
}

export default Bio
