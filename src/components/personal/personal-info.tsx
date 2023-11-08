import { FunctionComponent, useState } from 'react'

import { EditIcon, LogoutIcon, PersonalInfoIcon } from '@/assets'
import { Button, Card, Input, Typography } from '@/components'

import s from './personal-info.module.scss'

type Props = {
  email: string
  namePerson: string
}

export const PersonalInfo: FunctionComponent<Props> = ({ email, namePerson }) => {
  const [editInfo, setEditInfo] = useState(false)

  const togglePersonalInfo = () => setEditInfo(!editInfo)

  return (
    <Card as={'article'} className={s.card}>
      <Typography as={'h1'} className={s.title} variant={'large'}>
        Personal Information
      </Typography>
      <label className={s.label}>
        <PersonalInfoIcon />
        {!editInfo && (
          <div className={s.inputContainer}>
            <Button as={'input'} className={s.input} type={'file'} variant={'secondary'} />
            <EditIcon />
          </div>
        )}
      </label>
      {editInfo ? (
        <>
          <form className={s.form}>
            <div className={s.inputLine}>
              <Input
                id={'editInfo'}
                label={'Nickname'}
                placeholder={'Nickname'}
                value={namePerson}
              />
            </div>
            <Button>Save Changes</Button>
          </form>
        </>
      ) : (
        <>
          <label className={s.containerName}>
            <Typography className={s.name} variant={'h1'}>
              {namePerson}
            </Typography>
            <Button className={s.edit} onClick={togglePersonalInfo}>
              <EditIcon />
            </Button>
          </label>
          <Typography className={s.email} variant={'body2'}>
            {email}
          </Typography>
          <Button variant={'secondary'}>
            <LogoutIcon />
            Logout
          </Button>
        </>
      )}
    </Card>
  )
}
