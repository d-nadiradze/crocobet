import {Switch} from '@headlessui/react'

export default function InputSwitch({checked,onChange,className}) {

    return (
        <div className="">
            <Switch
                checked={checked}
                onChange={onChange}
                className={`${className}
          relative inline-flex h-[22px] w-[46px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
                <span
                    aria-hidden="true"
                    className={`${checked ? 'translate-x-6' : 'translate-x-0'}
            pointer-events-none inline-block h-[18px] w-[18px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
            </Switch>
        </div>
    )
}
