import React from 'react'
import BasePage from '../../base/BasePage'
import { View, Text, Dimensions, Image } from 'react-native'
import Swiper from 'react-native-swiper'
import { dataSearchScreen } from '../../helper/constant'
import { Tabs, Tab, ScrollableTab, Icon} from 'native-base'

export default class SearchScreen extends BasePage {

  // const typeName = dataSearchScreen.typeName

  constructor(props)
  {
    super(props)
    this.state = {
      index: 0
    }
  }

  renderTab = (item) => {
    let iconName = item.iconName
    return
    (
      <Tab heading = {<TabHeading><Icon name=$iconName/></TabHeading>}>Tab</Tab>
    )
}

  renderContent = () => {
    let data = []
    for (let i = 0; i < dataSearchScreen.data.length; i++) {
      data.push(this.renderTab(dataSearchScreen.data[i]))
    }
    return (
      <Container>
        <Header hasTabs/>
        <Tabs>
        </Tabs>
      </Container>
    )
}
}
