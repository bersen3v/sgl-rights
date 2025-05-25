import useCustomInputController from "@/shared/widgets/customInput/hooks/customInputController";

export default function useUserCustomInputs({
  firstNameDef,
  lastNameDef,
  companyDef,
  mailDef,
  phoneDef,
}: {
  firstNameDef: string;
  lastNameDef: string;
  companyDef: string;
  mailDef: string;
  phoneDef: string;
}) {
  const firstNameController = useCustomInputController(firstNameDef);
  const lastNameController = useCustomInputController(lastNameDef);
  const companyController = useCustomInputController(companyDef);
  const mailController = useCustomInputController(mailDef);
  const phoneController = useCustomInputController(phoneDef);

  return {
    firstNameController,
    lastNameController,
    companyController,
    mailController,
    phoneController,
  };
}
