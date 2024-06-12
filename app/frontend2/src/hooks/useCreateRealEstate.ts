import { createEstate, uploadImageToS3 } from '@/api/Estates'
import { getCookie } from '@/utils/cookies'
import React, { useEffect, useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import jwt from 'jsonwebtoken'

const useCreateRealEstate = () => {
  const [images, setImage] = useState<File[]>([])
  const [estateID, setEstateID] = useState('')

  const user = jwt.decode(getCookie('token')) as any

  const { control, handleSubmit, setValue, watch } = useForm()
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'media_contains'
  })

  const { isLoading, mutate: uploadImageMutate } = useMutation('estates', uploadImageToS3, {
    onSuccess: (data: string) => {
      append({ url: data })
    }
  })

  const { mutate: createEstateMutation } = useMutation('estates', createEstate)

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

  function onInfrastructureChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue('infrastructure', { ...watch('infrastructure'), [e.target.name]: e.target.checked })
  }

  function onExtraChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue('extra', { ...watch('extra'), [e.target.name]: e.target.value })
  }

  function onSubmit(data: any) {
    const newData = {
      ...data,
      listing_status: {
        published: true,
        featured: false,
        verified: false
      },
      media_contains: fields.map((field: any) => field.url),
      estate_id: estateID,
      author: user?.username
    }

    createEstateMutation(newData)
  }

  return {
    onImageInputChange,
    isLoading,
    fields,
    estateID,
    control,
    onInfrastructureChange,
    onExtraChange,
    handleSubmit,
    onSubmit,
    remove
  }
}

export default useCreateRealEstate
