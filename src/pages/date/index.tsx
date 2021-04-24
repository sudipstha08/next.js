import React from 'react'
import { ConfigProvider, DatePicker } from 'antd';
import moment from 'moment';
import 'moment/locale/ne';
import locale from 'antd/lib/locale/ne_NP';

const DatePage = () => {
  const handleDateChange = (date: moment.Moment | null, dateString: string) => {
    console.log(date, dateString);
  }
  return (
    <div>
      <ConfigProvider locale={locale}>
        <DatePicker 
        onChange={handleDateChange}
        allowClear
        autoFocus
        format="YYYY/MM/DD HH:mm"
        // dateRender={(currentDate, today) => <div>{moment(currentDate).locale("np").format("DD")}</div>}
        showNow
        showTime
     />
       </ConfigProvider>
    </div>
  )
}

export default DatePage
