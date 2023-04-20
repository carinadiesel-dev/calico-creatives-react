import * as FormRadix from '@radix-ui/react-form';
import { z } from 'zod';
import { 
    Formik,
    Field,
    Form,
    useField,
    FieldAttributes,
    FieldArray } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';

const Schema = z.object({
  name: z.string(),
  age: z.number(),
});

export const Form = () => {
return (
<div>
<Formik
initialValues={{
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  }}
  validationSchema={toFormikValidationSchema(Schema)}
onSubmit={(data, { setSubmitting }) => {setSubmitting(true);
    // make async call
    console.log("submit: ", data);
    setSubmitting(false);}}
    
  >{({ values, errors, isSubmitting }) => (
    <div>
        <Form>
            
</Form>
    </div>
  )}
  </Formik>
  </div>
)
}

// const LabelDemo = () => (
//     <div className="flex flex-wrap items-center gap-[15px] px-5">
//       <Label.Root className="text-[15px] font-medium leading-[35px] text-white" htmlFor="firstName">
//         First name
//       </Label.Root>
//       <input
//         className="bg-blackA5 shadow-blackA9 inline-flex h-[35px] w-[200px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
//         type="text"
//         id="firstName"
//         defaultValue="Pedro Duarte"
//       />
//     </div>
//   );
  
//   export default LabelDemo;
  
{/* <Form.Root>
    <Form.Field>
      <Form.Label />
      <Form.Control />
      <Form.Message />
      <Form.ValidityState />
    </Form.Field>

    <Form.Message />
    <Form.ValidityState />

    <Form.Submit />
  </Form.Root> */}