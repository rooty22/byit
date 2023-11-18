import React from 'react'
import Service from '../Service'

// Import Photos
const ico1 = '/media/serv.jpg'

const TapOne = () => {
  return (
    <div className='row'>
        <Service 
            photo={ico1}
            icon={ico1}
            title="جلسة الأوكسجين العلاجية"
            content="عتبر العلاج بالأكسجين أحد العلاجات الطبية الحديثة، حيث يتنفس المريض الأكسجين النقي بنسبة 100% تحت ضغط أعلى من الضغط الجوي المعتاد، ويوفر هذا العلاج العديد من الفوائد للمرضى ومنها:"
            price="200"
            link="https://google.com"
            btnName="حجز"
        />
        <Service 
            photo={ico1}
            icon={ico1}
            title="جلسة الأوكسجين العلاجية"
            content="عتبر العلاج بالأكسجين أحد العلاجات الطبية الحديثة، حيث يتنفس المريض الأكسجين النقي بنسبة 100% تحت ضغط أعلى من الضغط الجوي المعتاد، ويوفر هذا العلاج العديد من الفوائد للمرضى ومنها:"
            price="200"
            link="https://google.com"
            btnName="حجز"
        />
    </div>
  )
}

export default TapOne