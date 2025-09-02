import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const SearchInputWithButton = () => {
    return (
           <div className="flex w-full my-5 items-center gap-2">
      <Input type="text" placeholder="Search by name or email" className='w-full border-gray-300 focus:outline-blue-400' />
      <Button type="submit" size={20} className='bg-blue-600 text-white px-6 text-xl py-2 rounded-md'>
        Search
      </Button>
    </div>

    );
};

export default SearchInputWithButton;