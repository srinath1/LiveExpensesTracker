import React from 'react'
import { shallow } from 'enzyme'
import{ ExpensesSummary} from '../../components/ExpensesSummary'
test('should correctly render expenses with 1 expense',()=>{
    const wrapper=shallow(<ExpensesSummary expenseCount={1} expenseTotal={123}/>)
    expect(wrapper).toMatchSnapshot()

})
test('should correctly render expenses with multiple expense',()=>{
    const wrapper=shallow(<ExpensesSummary expenseCount={10} expenseTotal={123456}/>)
    expect(wrapper).toMatchSnapshot()
    
})