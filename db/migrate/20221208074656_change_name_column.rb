class ChangeNameColumn < ActiveRecord::Migration[7.0]
  def change
    change_column :users, :name, :string
    #Ex:- change_column("admin_users", "email", :string, :limit =>25)
  end
end
