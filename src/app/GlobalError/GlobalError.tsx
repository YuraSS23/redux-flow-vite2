import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { setAppErrorAC } from '../app-reducer.ts'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../store.ts'
import { selectError } from '../app-selectors.ts'

export const GlobalError = () => {
  const errorMessage = useAppSelector(selectError)
  const dispatch = useDispatch()

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage)
      dispatch(setAppErrorAC(null))
    }
  }, [errorMessage])

  return <ToastContainer theme="dark" autoClose={3000} />
}
