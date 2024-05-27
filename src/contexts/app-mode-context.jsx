import React, { createContext, useState, useMemo, useContext } from 'react';

import PropTypes from 'prop-types';

const AppModeContext = createContext();

export function AppModeProvider({ children }) {
    const [appMode, setAppMode] = useState('light');

    const value = useMemo(() => ({ appMode, setAppMode }), [appMode, setAppMode]);

    return (
        <AppModeContext.Provider value={value}>
            {children}
        </AppModeContext.Provider>
    );
}

export function useAppMode() {
    return useContext(AppModeContext);
}


AppModeProvider.propTypes = {
    children: PropTypes.node,
};
