import { render } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import App from "./App"

function setup(jsx:React.ReactNode ) {
    return {
      user: userEvent.setup(),
      // Import `render` from the framework library of your choice.
      // See https://testing-library.com/docs/dom-testing-library/install#wrappers
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
})