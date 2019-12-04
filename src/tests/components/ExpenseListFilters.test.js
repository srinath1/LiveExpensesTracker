import React from 'react'
import moment from 'moment'
import { shallow } from 'enzyme'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import{ filters,altFilters} from '../fixtures/filters'

let setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate,wrapper
beforeEach(()=>{
    setTextFilter=jest.fn();
    sortByAmount=jest.fn();
    sortByDate=jest.fn();
    setEndDate=jest.fn();
    setStartDate=jest.fn()
    wrapper=shallow(<ExpenseListFilters
    filters={filters}
         setTextFilter={setTextFilter}
         sortByAmount={sortByAmount}
         sortByDate={sortByDate}
         setEndDate={setEndDate}
         setStartDate={setStartDate}
         
         />)

})
test('should render ExpenseListFilters correctly',()=>{
    expect(wrapper).toMatchSnapshot()
})
test('should render altData correctly',()=>{
    wrapper.setProps({
        filters:altFilters
    })
    expect(wrapper).toMatchSnapshot()
})

test('should handle text change',()=>{
    const value="rent"
    wrapper.find('input').simulate('change',{
        target:{value}
    })
})

test('should start by date',()=>{
    const value="date"
    wrapper.setProps({
        filters:altFilters
    })
    wrapper.find('select').simulate('change',{
        target:{value}
    })
    expect(sortByDate).toHaveBeenCalled()
})
test('sort by amount',()=>{
    const value="amount"
    
    wrapper.find('select').simulate('change',{
        target:{value}
    })
    expect(sortByAmount).toHaveBeenCalled()

})
test('should handle date changes',()=>{
    const startDate=moment(0).add(4,'years');
    const endDate=moment(0).add(8,'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})
test('should handle focused changes',()=>{
    const calendarFocused='endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused)

})