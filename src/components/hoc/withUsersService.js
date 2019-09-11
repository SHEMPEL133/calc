import React from 'react';
import { UsersServiceConsumer } from '../UsersServiceContext';

const withUsersService = () => (Wrapped) => {
    return (props) => {
        return (
            <UsersServiceConsumer>
                {
                    (usersService) => {
                        return (<Wrapped {...props}
                            usersService={usersService} />);
                    }
                }
            </UsersServiceConsumer>
        );
    }
};

export default withUsersService;