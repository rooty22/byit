import React from 'react'
import { Tabs, Tab } from 'react-bootstrap';
import HeadSection from '../elements/HeadSection';
import BlogPageCard from '../elements/BlogPageCard';

// Import Media 
const phoo = '/media/slid2.jpg'

const LastNews = () => {
  return (
    <div className='LastN'>
        <div className="container">
            
            <HeadSection>أخر المقالات</HeadSection>
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="الأمراض" className='acto'>
                    <div className="row">
                        <BlogPageCard 
                            phot={phoo}
                            title="الرعاية الصحية المنزلية: مزايا متعددة لمختلف الاحتياجات"
                            txt="يعد الحصول على مقدم رعاية مهماً للكثير من العائلات والحالات الصحية المختلفة. تعرف على أهمية مقدمي الرعاية المنزلية من البيت."
                            date="March/4/2023"
                            btnLink="#"
                            btnName="المزيد ..."
                        />

                        <BlogPageCard 
                            phot={phoo}
                            title="الرعاية الصحية المنزلية: مزايا متعددة لمختلف الاحتياجات"
                            txt="يعد الحصول على مقدم رعاية مهماً للكثير من العائلات والحالات الصحية المختلفة. تعرف على أهمية مقدمي الرعاية المنزلية من البيت."
                            date="March/4/2023"
                            btnLink="#"
                            btnName="المزيد ..."
                        />
                        
                    </div>
                </Tab>

                <Tab eventKey="doc" title="الرعاية الصحية">
                    <div className="row">
                        <BlogPageCard 
                            phot={phoo}
                            title="الرعاية الصحية المنزلية: مزايا متعددة لمختلف الاحتياجات"
                            txt="يعد الحصول على مقدم رعاية مهماً للكثير من العائلات والحالات الصحية المختلفة. تعرف على أهمية مقدمي الرعاية المنزلية من البيت."
                            date="March/4/2023"
                            btnLink="#"
                            btnName="المزيد ..."
                        />
                    </div>
                </Tab>

                <Tab eventKey="doc2" title="نصائح طبية">
                    <div className="row">
                        <BlogPageCard 
                            phot={phoo}
                            title="الرعاية الصحية المنزلية: مزايا متعددة لمختلف الاحتياجات"
                            txt="يعد الحصول على مقدم رعاية مهماً للكثير من العائلات والحالات الصحية المختلفة. تعرف على أهمية مقدمي الرعاية المنزلية من البيت."
                            date="March/4/2023"
                            btnLink="#"
                            btnName="المزيد ..."
                        />
                    </div>
                </Tab>

                <Tab eventKey="doc3" title="الغذاء والتغذية">
                    <div className="row">
                        <BlogPageCard 
                            phot={phoo}
                            title="الرعاية الصحية المنزلية: مزايا متعددة لمختلف الاحتياجات"
                            txt="يعد الحصول على مقدم رعاية مهماً للكثير من العائلات والحالات الصحية المختلفة. تعرف على أهمية مقدمي الرعاية المنزلية من البيت."
                            date="March/4/2023"
                            btnLink="#"
                            btnName="المزيد ..."
                        />
                    </div>
                </Tab>
            </Tabs>
            
        </div>
    </div>
  )
}

export default LastNews