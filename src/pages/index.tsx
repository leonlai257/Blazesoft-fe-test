import { PlusIcon } from '@radix-ui/react-icons'
import { Overlay } from '@src/components/Overlay'
import { PageLayout } from '@src/components/layouts'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Main() {
    interface BookProps {
        name: string
        price: number
        category: string
        description: string
    }

    const defaultBooks: BookProps[] = [
        {
            name: 'Book 1',
            price: 100,
            category: 'Category 1',
            description: 'Description 1',
        },
        {
            name: 'Book 2',
            price: 200,
            category: 'Category 2',
            description: 'Description 2',
        },
        {
            name: 'Book 3',
            price: 100,
            category: 'Category 3',
            description: 'Description 3',
        },
        {
            name: 'Book 4',
            price: 100,
            category: 'Category 4',
            description: 'Description 4',
        },
        {
            name: 'Book 5',
            price: 100,
            category: 'Category 5',
            description: 'Description 5',
        },
        {
            name: 'Book 6',
            price: 100,
            category: 'Category 6',
            description: 'Description 6',
        },
        {
            name: 'Book 7',
            price: 100,
            category: 'Category 7',
            description: 'Description 7',
        },
    ]

    const {
        register,
        setValue,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm<BookProps>({
        defaultValues: {
            name: '',
            price: 0,
            category: '',
            description: '',
        },
    })

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch (e.target.name) {
            case 'name':
                setValue('name', e.target.value)
                break
            case 'price':
                setValue('price', +e.target.value)
                break
            case 'category':
                setValue('category', e.target.value)
                break
            case 'description':
                setValue('description', e.target.value)
                break
        }
    }

    const [books, setBooks] = useState<BookProps[]>(defaultBooks)
    const [edit, setEdit] = useState<string | null>(null)

    const onAdd = () => {
        setEdit('')
        setValue('name', '')
        setValue('price', 0)
        setValue('category', '')
        setValue('description', '')
    }

    const onEdit = (book: BookProps) => {
        setEdit(book.name)
        setValue('name', book.name)
        setValue('price', book.price)
        setValue('category', book.category)
        setValue('description', book.description)
    }

    const onSave = (book: BookProps) => {
        if (books.filter((item) => item.name === book.name).length > 0) {
            setBooks(books.map((item) => (item.name === book.name ? book : item)))
        } else {
            setBooks([...books, book])
        }
        setEdit(null)
    }

    const onCancel = () => {
        setEdit(null)
    }

    const onDelete = (book: string) => {
        setBooks(books.filter((item) => item.name !== book))
        setEdit(null)
    }

    return (
        <>
            <PageLayout>
                <div className="relative inset-0 m-auto flex min-h-screen w-full flex-col items-start justify-start">
                    {edit != null && (
                        <Overlay>
                            <div className="relative flex flex-col gap-4 bg-secondary p-4">
                                <div className="relative flex h-fit w-fit items-start justify-start gap-4 ">
                                    <div className="flex flex-col gap-2">
                                        <div className="text-[20px] font-bold">Book</div>
                                        <div className="text-[20px] font-bold">Price</div>
                                        <div className="text-[20px] font-bold">Category</div>
                                        <div className="text-[20px] font-bold">Description</div>
                                    </div>
                                    <div className="relative flex h-fit w-[40vw] flex-col items-start justify-start gap-2 bg-secondary ">
                                        <input
                                            {...register('name')}
                                            className="h-[30px] w-full text-black-secondary placeholder-black-secondary"
                                            onChange={inputHandler}
                                        />
                                        <input
                                            {...register('price')}
                                            className="h-[30px] w-full text-black-secondary placeholder-black-secondary"
                                            onChange={inputHandler}
                                        />
                                        <input
                                            {...register('category')}
                                            className="h-[30px] w-full text-black-secondary placeholder-black-secondary"
                                            onChange={inputHandler}
                                        />
                                        <input
                                            {...register('description')}
                                            className="h-[30px] w-full text-black-secondary placeholder-black-secondary"
                                            onChange={inputHandler}
                                        />
                                    </div>
                                </div>
                                <div className="relative flex w-full flex-row items-center justify-end gap-4">
                                    <div
                                        className="btn flex w-fit items-center gap-1 bg-black-primary p-2"
                                        onClick={() => onSave(getValues())}>
                                        <div className="text-title">Save</div>
                                    </div>
                                    <div className="btn flex w-fit items-center gap-1 bg-black-primary p-2" onClick={onCancel}>
                                        <div className="text-title">Cancel</div>
                                    </div>
                                    {books.filter((item) => item.name === edit).length > 0 && (
                                        <div
                                            className="btn flex w-fit items-center gap-1 bg-black-primary p-2"
                                            onClick={() => onDelete(edit)}>
                                            <div className="text-title">Delete</div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Overlay>
                    )}
                    <div className="relative flex min-h-[90vh] w-full flex-col items-start">
                        <div className="flex h-full w-full flex-row flex-wrap items-start justify-start gap-4 px-10">
                            {books.map((book, index) => {
                                return (
                                    <div
                                        key={`${index}-${book.name}`}
                                        className="btn flex w-fit flex-col gap-2 bg-primary p-2"
                                        onClick={() => onEdit(book)}>
                                        <div className="text-title">{book.name}</div>
                                        <div className="text-title">{book.price}</div>
                                        <div className="text-title">{book.category}</div>
                                        <div className="text-title">{book.description}</div>
                                    </div>
                                )
                            })}
                            <div className="btn flex w-fit items-center gap-1 bg-secondary p-2" onClick={onAdd}>
                                <PlusIcon className="h-6 w-6" />
                                <div className="text-title">Add</div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageLayout>
        </>
    )
}
