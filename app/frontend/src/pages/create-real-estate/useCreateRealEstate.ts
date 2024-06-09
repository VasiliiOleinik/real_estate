import { uploadImageToS3 } from '@/api/Estates'
import React, { useEffect, useRef, useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'

export const useCreateRealEstate = () => {
  const [images, setImage] = useState<File[]>([])
  const [estateID, setEstateID] = useState('')

  const { control, handleSubmit, setValue, watch } = useForm()
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control,
    name: 'media_contains'
  })

  const { isLoading, mutate: uploadImageMutate } = useMutation('estates', uploadImageToS3, {
    onSuccess: (data: string) => {
      append({ url: data })
    }
  })

  function onImageInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const image = e.target.files
    if (image) {
      let formData = new FormData()
      formData.append('file', image[0])
      formData.append('estate_id', estateID)
      uploadImageMutate({ file: formData, estate_id: estateID })
    }
  }

  useEffect(() => {
    setEstateID(crypto.randomUUID().split('-')[0])
  }, [])

  console.log('watch', watch())
  return {
    onImageInputChange,
    isLoading,
    fields,
    estateID
  }
}
