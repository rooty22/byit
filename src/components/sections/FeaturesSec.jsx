import React from 'react'
import Feature from '../elements/Features'

// Feature Data
const Feat1 = '/media/fea1.png'
const Feat2 = '/media/fea2.png'
const Feat3 = '/media/fea3.png'
const Feat4 = '/media/fea4.png'

const FeaturesSec = () => {
  return (
    <div className='Features text-center'>
        <div className='container'>
            <div className='row'>
                
                <Feature 
                icon={Feat1} 
                title= "من البيت للبيت"
                content= "نقدم لك خدماتنا الطبية المنزلية في بيتك لضمان راحتك، سلامتك وخصوصيتك"
                />

                <Feature 
                icon={Feat2} 
                title= "دقة المواعيد والمرونة"
                content= "نحن في البيت للرعاية الطبية المنزلية نعمل ضمن مواعيد مرنة ودقيقة حسب احتياجات المريض."
                />

                <Feature 
                icon={Feat3} 
                title= "سهولة التواصل"
                content= "مستعدين لاستقبال استفساراتكم وحجز مواعيدكم عبر رقم خدمة العملاء أو من خلال مواقع التواصل الاجتماعي"
                />

                <Feature 
                icon={Feat4} 
                title= "أسعار متميزة"
                content= "من مبدأ الجودة والعناية المخصصة نقدم أسعار متميزة تتناسب مع عملائنا ضمن احتياجاتهم الصحية."
                />
                
            </div>
        </div>
    </div>
  )
}

export default FeaturesSec