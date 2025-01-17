import React, { useState, useEffect, useContext } from "react"
import { StaticQuery, graphql, Link, useStaticQuery } from "gatsby"

//styles / animation
import { TransitionGroup } from "react-transition-group"

import { telstraTower } from "../../static/hardcoded-svgs"
import { heroGraphic } from "../../static/heroGraphic.js"
import { Button, Icon, Typography, Grid, makeStyles } from "@material-ui/core"
import { RateReview, Call, Visibility } from "@material-ui/icons"
import CustomButton from "./customButton.js"
import TiltPhaseSix from "./reactTilt"
// const _Button = styled(Button)`
//   background: orange;
//   color: black;
//   font-family: Berlin-Sans-FB;
// `


//makestyles for material ui
const useStyles = makeStyles(theme => ({
  typography: {
    color: theme.palette.text.secondary,
  },
  heroUnderlay: {
    background: 'linear-gradient(180deg, #3F310E 0%, #795E1B 100%)',
    marginTop: '-80px',
    marginBottom: "20px",
    paddingTop: '120px',
    paddingBottom: '40px',
    height: "150%",
    width: "100vw",
    zIndex: 0
  },
  heroGraphic: {
    [theme.breakpoints.down('md')]: {
      // opacity: .15,
      // position: 'absolute',
      // display: 'absolute',
      // top: '-22.5%',
      // zIndex: -1,
      // order: 0,
      // maxWidth:'800px',
      visibility: 'hidden',
      display: 'none'
    },
    display: 'block',
    visibility: 'visible',
    position: 'relative',
    zIndex: 0,
  },
  heroContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: 'auto'
  },
}))

//prettier-ignore
export default function HeroHeader({ context, headerGraphic, headline, headlineDescription }) {
  //prettier-ignore
  const { site: { siteMetadata: { title, description } } } = useStaticQuery(pageQuery);

  const classes = useStyles()

  //prettier-ignore
  const _telstraTower = React.useCallback(() => (<div className="position-absolute overflow-hidden d-none d-lg-block" style={{ right: "0px", top: "10%", zIndex: 0 }} dangerouslySetInnerHTML={{ __html: telstraTower }}></div>), []);

  const heroData = {
    headline: () => (
      <Typography variant="h1" gutterBottom className={classes.typography}>
        SWIFT &<br />
        ELEGANT TREE
        <br />
        MAINTENENCE
      </Typography>
    ),
    description: () => (
      <Typography variant="body1" gutterBottom className={classes.typography}>
        At HAKN tree removal, we provide a trusted alternative
        <br />
        for customers, eliminating the uncertainty when hiring
        <br />a tree specialist
      </Typography>
    ),
  }

  //prettier-ignore
  const _heroGraphic = React.useCallback(
    () => (
      <>
        <div
          className={classes.heroGraphic + " col-5 h-100 m-auto"}
          dangerouslySetInnerHTML={{ __html: heroGraphic }}
          style={{ maxWidth: "700px" }}
        /> 
      </>
    ),
    []
  )
  return (
    <>
      <div className={classes.heroUnderlay}>
        <section className={classes.heroContainer+" col-xl-8 col-10"} id="home">
          {/* div wrapper only active on mobile breakpoint */}
 
            <div className="flex-column h-100 position-relative m-auto">
              {heroData.headline()}
              {heroData.description()}
              <Grid container spacing={4} className="mt-4 mx-sm-auto">
                <Grid item md={6} xs={12} className="p-0">
                  <CustomButton shadow action={() => document.getElementById("#getaquote")?.scrollIntoView()} Icon={RateReview}>
                    Get a free quote
                  </CustomButton>
                </Grid>
                <Grid item md={6} xs={12} className="px-0">
                  <CustomButton shadow action={() => window.location.href = "tel:+610459289772"} Icon={Call}>
                    Call us today!
                  </CustomButton>
                </Grid>
              </Grid>
            </div>
            <TiltPhaseSix
                  // disabled={!expanded[index]}
                  options={{
                    // max: 10,
                    // perspective: 1000,
                    // scale: 1.05,
                  }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width:'inherit',
                    height:'inherit',
                    alignItems: 'center', 
                  }}
                >
                  {_heroGraphic()}
                </TiltPhaseSix>
            {/* active on mobile breakpoint */}
            <div className="col-5 mt-3 mx-auto w-100 grid-wrapper d-sm-none">
            </div> 
          {/* {_telstraTower()} */}
          {/* <div className="brand-section-bg d-sm-none d-block p-4"></div> */}
        </section>
      </div>
    </>
  )
}

export const pageQuery = graphql`
  query heroHeaderQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
