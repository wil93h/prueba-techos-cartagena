import { Dropdown } from 'primereact/dropdown';
import { useTranslation } from 'react-i18next';
import { TbWorld } from "react-icons/tb";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
 
  const languageOptions = [
    { label: 'EN', value: 'en' },
    { label: 'ES', value: 'es' }
  ];

  const handleChangeLanguage = (e) => {
    i18n.changeLanguage(e.value);
  };
  
  return (
    <div className="p-d-flex p-ai-center p-jc-center">
      <Dropdown
        value={i18n.language}
        options={languageOptions}
        onChange={handleChangeLanguage}
        optionLabel="label"
        optionValue="value"
        className="p-mr-2 bg-transparent border-none text-white"
        style={{ color: 'yellow' }}
        valueTemplate={(selectedOption) => (
          <div style={{ display: "flex", alignItems: "center" }}>
            <TbWorld style={{ marginRight: "8px",fontSize: "22px" }}  />
            <span>{selectedOption ? selectedOption.label : ""}</span>
          </div>
        )}
        itemTemplate={(option) => (
          <div style={{ display: "flex", alignItems: "center" }}>
            <TbWorld style={{ marginRight: "8px" }} />
            <span>{option.label}</span>
          </div>
        )}
      />
    </div>
  );
};

export default LanguageSelector;
