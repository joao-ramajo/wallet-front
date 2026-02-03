import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import type { Category } from "../hooks/useGetCategoryListQuery";

type CategoriesSelectProps = {
	value: number | null;
	onChange: (value: number | null) => void;
	categories: Category[];
	disabled?: boolean;
};

export const CategoriesSelect = ({
	value,
	onChange,
	categories,
	disabled = false,
}: CategoriesSelectProps) => {
	const labelId = "category-label";

	return (
		<FormControl fullWidth disabled={disabled}>
			<InputLabel id={labelId}>Categoria</InputLabel>
			<Select<number | "">
				labelId={labelId}
				label="Categoria"
				value={value ?? ""}
				onChange={(e) => {
					const v = e.target.value;
					onChange(v === "" ? null : Number(v));
				}}
			>
				<MenuItem value="">Sem categoria</MenuItem>

				{categories.map((cat) => (
					<MenuItem key={cat.id} value={cat.id}>
						{cat.name}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};
