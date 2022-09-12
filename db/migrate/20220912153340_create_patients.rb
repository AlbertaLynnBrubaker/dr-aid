class CreatePatients < ActiveRecord::Migration[6.1]
  def change
    create_table :patients do |t|
      t.string :username
      t.string :password_digest
      t.string :avatar_url
      t.string :full_name
      t.integer :age
      t.string :address
      t.integer :phone
      t.string :email

      t.timestamps
    end
  end
end
