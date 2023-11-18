import React, { Fragment } from 'react'
import HeadSection from '../components/elements/HeadSection'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Contact() {
  return (
    <Fragment>
        <Header />

        <div className='ContactPage'>
            <div className='container'>
                <div className='Heade text-center'>
                    <HeadSection>تواصل معنا</HeadSection>
                    <p>
                        هل لديك أي استفسار أو ترغب بحجز موعد؟ يسعدنا أن تتواصل معنا في أي وقت من خلال النموذج التالي!
                    </p>
                </div>

                <div className='Form'>
                    <form>
                        <div className="form-group mb-3">
                            <div className="row">
                                <div className="col">
                                    <input type='text' className='form-control' placeholder='الأسم' />
                                </div>
                                <div className="col">
                                    <input type='email' className='form-control' placeholder='ألبريد الالكتروني' />
                                </div>
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <div className="row">
                                <div className="col">
                                    <input type='text' className='form-control' placeholder='رقم الهاتف' />
                                </div>
                                <div class="col">
                                    <input type='text' className='form-control' placeholder='الخدمة المطلوبة' />
                                </div>
                            </div>
                        </div>

                        <div className="form-group mb-3">
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='رسالتك ؟'></textarea>
                        </div>
                        
                        <button type="submit" className="btn btn-primary">ارسال</button>
                    </form>
                </div>
            </div>
        </div>

        <Footer />
    </Fragment>
  )
}

export default Contact