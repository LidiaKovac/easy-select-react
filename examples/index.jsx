import React, { useState } from "react"
import { Select } from "../select-ts/Select"

const Example = () => {
	const [option, setOption] = useState()
	const options = [
		new OptionClass("1", "Option 1"),
		new OptionClass("2", "Option 2"),
	]
	return (
		<>
			<Select
				options={options}
				selectedOpt={(mode) => setOption(mode.val)}
			/>
		</>
	)
}
export default Example
