import React from "react"
import Link from "next/link"
import { withRouter } from "next/router"
import tabsStyles from '../styles/tabs.module.css'

const Tabs = ({ router }) => {
  const {
    query: { tab }
  } = router

  const isTabOne = tab === "1" || tab == null

  return (
    <div>
      <div>
      </div>
      <div >
        {isTabOne && <div className={tab}>This is tab one content</div>}

      </div>
    </div>
  )
}

export default withRouter(Tabs)

