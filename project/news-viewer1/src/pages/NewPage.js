import React from 'react'
import { useParams } from 'react-router-dom'
import Categories from '../components/Categories'
import NewsList from '../components/NewsList'
/* 
function NewPage() {
  const params = useParams();
  const category = params.category || "all";

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
} */

const NewPage = () => {
	const params = useParams()
	const category = params.category || 'all'
	// console.log(category);

	return (
		<>
			<Categories />
			<NewsList category={category} />
		</>
	)
}
export default NewPage
