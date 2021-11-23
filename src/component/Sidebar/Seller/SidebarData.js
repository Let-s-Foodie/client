import React from 'react'
import {
  MdHome,
  MdBusinessCenter,
  MdInsertPhoto,
  MdMailOutline,
  MdRateReview,
} from 'react-icons/md'

export const SidebarData = {
  titleOne: 'Home',
  iconOne: <MdHome />,
  linkOne: '/home',

  titleTwo: 'Business Information',
  iconTwo: <MdBusinessCenter />,
  linkTwo: '/biz_info',

  titleThree: 'Photo and Videos',
  iconThree: <MdInsertPhoto />,
  linkThree: '/biz_photos',

  titleFour: 'Reviews',
  iconFour: <MdRateReview />,
  linkFour: '/biz_reviews',

  titleFive: 'Inbox',
  iconFive: <MdMailOutline />,
  linkFive: '/messaging',
}
