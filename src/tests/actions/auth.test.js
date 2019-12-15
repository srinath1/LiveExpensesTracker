import {login,logout} from '../../actions/auth'
test('should generate action',()=>{
    const uid='abc123'
    const action=login(uid)
    expect(action).toEqual({
        type:'LOGIN',
        uid
    })
})
test('for logout',()=>{
    const action=logout()
    expect(action).toEqual({
        type:'LOGOUT'
    })
})