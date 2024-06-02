import { useAppMode } from 'src/contexts/app-mode-context';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default function LanguagePopover() {
  const { appMode, setAppMode } = useAppMode();

  const toggleAppMode = () => {
    setAppMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      {/* <FontAwesomeIcon icon={faCoffee} /> */}
      <button type="button" onClick={toggleAppMode}>
        Modo: {appMode}
      </button>
    </>
  );
}
