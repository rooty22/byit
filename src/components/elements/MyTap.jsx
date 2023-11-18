import React from 'react'
import { Tabs, Tab } from 'react-bootstrap';
import TabButton from './TabButton';
import TapOne from './serviceTabs/TapOne';
import TapTow from './serviceTabs/TapTow';

const ico1 = '/media/sr1.png'
const ico2 = '/media/sr2.png'
const ico3 = '/media/sr3.png'
const ico4 = '/media/sr4.png'
const ico5 = '/media/sr5.png'
const ico6 = '/media/sr6.png'
const ico7 = '/media/sr7.png'

const MyTap = () => {
  return (
    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
      <Tab eventKey="home" title={
        <TabButton 
        icon={ico1} 
        title="خدمة التحاليل الطبية"
        />
      }>
        <TapOne />
      </Tab>
      <Tab eventKey="profile" title={
        <TabButton 
        icon={ico2} 
        title="خدمة التمريض" />
        }>
        <TapTow />
      </Tab>
      <Tab eventKey="contact" title={
        <TabButton 
        icon={ico3} 
        title="العلاج الطبيعي" />
        }>
        <TapTow />
      </Tab>
      <Tab eventKey="contact2" title={
        <TabButton 
        icon={ico4} 
        title="مقدمي الرعاية المنزلية" />
        }>
        <TapTow />
      </Tab>
      <Tab eventKey="contact3" title={
        <TabButton 
        icon={ico5} 
        title="زيارة الطبيب" />
        }>
        <TapTow />
      </Tab>
      <Tab eventKey="contact4" title={
        <TabButton 
        icon={ico6} 
        title="إستشارة طبية عن بعد" />
        }>
        <TapTow />
      </Tab>
      <Tab eventKey="contact5" title={
        <TabButton 
        icon={ico7} 
        title="الأشعة" />
        }>
        <TapTow />
      </Tab>
      
    </Tabs>
  )
}

export default MyTap
