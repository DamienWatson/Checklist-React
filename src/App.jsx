import { useState } from 'react';
import UsersList from './components/users-list';
import SelectedUsers from './components/selected-users';

function App() {
  const [state, setState] = useState({ selected_ids: [] });
  const users = {
    '01bbb998-af3d-47a4-b0ff-e67d033d80e9': 'Luz Ballard',
    '01021494-f157-4183-964c-6b0ddc964ab8': 'Corey Johnson',
    '97a2daa4-406b-4b1c-831e-bdfd90b224f2': 'Andrew Torres',
    '6256ba85-b59f-40b9-8715-406cc54d7f05': 'Nichole Wilson',
    '5c0c746c-ec56-4fb7-8b32-066b64d70611': 'Nancy Hall',
    'c103b480-8efb-450f-9141-6a8037de2348': 'Agnes Lorenzen',
    '4e0cc3dc-fce9-45d9-85c7-a3ae5cb0ce57': 'Donald Hyde',
    'f80af139-5c68-4475-8cb6-ced7e38c6f43': 'Dennis Fuller',
    '5073359e-b228-4852-b1a3-3f2edfc8672f': 'Francis Hodgkins',
    '9c9a3cc8-044e-43d0-87ff-58a6b44eca53': 'David McLain'
  }

  const handleCheckBoxClick = (uuid) => {
		const existing_index = state.selected_ids.findIndex(id => (id === uuid));
		if (existing_index > -1) {
			setState(prevState => ({
				selected_ids: [
					...prevState.selected_ids.slice(0,existing_index),
					...prevState.selected_ids.slice(existing_index + 1)
				]
			}));
		} else {
			setState(prevState => ({
				selected_ids: [
					...prevState.selected_ids,
					uuid
				]
			}));
		}
	}

  return (
    <div className="App">
      <section id="check-list">
        <header>
          <img src="/img/logo128.png" width="32" height="32" alt="Damien Logo"/>
          <h1>User Checklist</h1>
        </header>

        <UsersList
          users={users}
          onClick={handleCheckBoxClick}
        />
      </section>

      {state.selected_ids.length > 0 && (
        <SelectedUsers selectedIds={state.selected_ids} />
      )}
    </div>
  );
}

export default App;
