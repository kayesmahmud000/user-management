
'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useEffect} from "react";
import { useDebounce } from 'use-debounce';

const SearchInputWithButton = ({ onSearch, searchText, setSearchText }) => {
  const [query] = useDebounce(searchText, 500)
  
  useEffect(() => {
    if (onSearch) {
      onSearch(query)
    }
  }, [query, onSearch])
  
  return (
    <div className="lg:flex w-full my-5 items-center gap-2">
      <Input 
        value={searchText}
        onChange={e => setSearchText(e.target.value)} 
        type="text" 
        placeholder="Search by name or email" 
        className='w-full border-gray-300 focus:outline-blue-400' 
      />
      <Button 
        type="submit" 
        className='bg-blue-600 w-full lg:w-fit mt-3 lg:mt-0 text-white px-6 text-xl py-2 rounded-md'
        size='md'
      >
        Search
      </Button>
    </div>
  );
};

export default SearchInputWithButton;