import { queryByText, render, waitFor, screen} from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import App from "./App"

function setup(jsx:React.ReactNode ) {
    return {
      user: userEvent.setup(),
      ...render(jsx),
    }
  }

describe('<App/>', () => {
    it('should render list items', () => {
        const { getByText } = setup(<App />)

        expect(getByText('Java')).toBeInTheDocument()
        expect(getByText('C++')).toBeInTheDocument()
        expect(getByText('C#')).toBeInTheDocument()
        expect(getByText('Ruby')).toBeInTheDocument()

    })

    it('should add item in the list', async () => {
        const {getByText,getByPlaceholderText, user} = setup(<App/>)
        const addButton = getByText('Add to list')
        const inputElement = getByPlaceholderText('Novo item');

        await user.type(inputElement, 'Python')
        await user.click(addButton)

        expect(getByText('Python')).toBeInTheDocument()
       
    })

    it('should remove item from list', async () => {
      const {user, getAllByText} = setup(<App/>)

      const removeButtons = getAllByText('Remover')

      user.click(removeButtons[0])

      await waitFor(() => {
        expect(screen.queryByText('Java')).not.toBeInTheDocument()
      })
    })
})