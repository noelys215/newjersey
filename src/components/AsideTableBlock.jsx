/* eslint-disable react/prop-types */

export const AsideTableBlock = ({ data, source }) => {
	return (
		<aside className="aside-table-block">
			<h2>Region Makeup</h2>
			<table>
				<thead>
					<tr>
						<th>Type</th>
						<th>County</th>
						<th>Zip Code</th>
						<th>Land Area</th>
					</tr>
				</thead>
				<tbody>
					{data.map((row, index) => (
						<tr key={index}>
							<td>{row.regionType}</td>
							<td>{row.county}</td>
							<td>{row.zipCode}</td>
							<td>{row.landArea}</td>
						</tr>
					))}
				</tbody>
			</table>
			<a className="block-link" href={source} target={'_blank'} rel="noreferrer">
				&ldquo;source&rdquo;
			</a>
		</aside>
	);
};

export const EconomyAsideTableBlock = ({ data, source }) => {
	return (
		<aside className="aside-table-block">
			<h2>Demographic</h2>
			<table>
				<thead>
					<tr>
						<th>Year EST.</th>
						<th>Population</th>
						<th>Avg. Income</th>
					</tr>
				</thead>
				<tbody>
					{data.map((row, index) => (
						<tr key={index}>
							<td>{row.year}</td>
							<td>{row.population}</td>
							<td>{row.income}</td>
						</tr>
					))}
				</tbody>
			</table>
			<a className="block-link" href={source} target={'_blank'} rel="noreferrer">
				&ldquo;source&rdquo;
			</a>
		</aside>
	);
};
