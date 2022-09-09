/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import Users from '../../components/Users'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

describe('test module User', () => {
  test('halaman keluar dengan benar', () => {
    render(< Users />)
  })
})
